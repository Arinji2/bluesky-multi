import AnimationLayout from "@/AnimationLayout";
import Home from "@/Home";
import Post from "@/Post";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AnimationLayout>
            <Home />
          </AnimationLayout>
        }
      />

      <Route
        path="/post"
        element={
          <AnimationLayout>
            <Post />
          </AnimationLayout>
        }
      />
    </Routes>
  );
}

export default App;
