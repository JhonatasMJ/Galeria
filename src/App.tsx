import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageComponents from "@/pages/components";
import Layout from "@/pages/_layout";
import Home from "@/pages/home";
import PhotoDetails from "@/pages/photo-details";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NuqsAdapter } from "nuqs/adapters/react-router";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <NuqsAdapter>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/fotos/:id" element={<PhotoDetails />} />
              <Route path="/components" element={<PageComponents />} />
            </Route>
          </Routes>
        </NuqsAdapter>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
