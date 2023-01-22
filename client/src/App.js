import Header from "./components/Header";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Project from "./pages/Project";


// For reference go to src/components/ClientRow 
const cache = new InMemoryCache({
  typePolicies : {
    Query : {
      fields : {
        clients : {
          merge(existing, incoming){
            return incoming
          }
        },
        projects : {
          merge(existing, incoming){
            return incoming
          }
        }
      }
    }
  }
})

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache,
})


function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/projects/:id" element={<Project />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </ApolloProvider>
    </>
  );
}

export default App;
