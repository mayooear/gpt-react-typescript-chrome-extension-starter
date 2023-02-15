import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const root = document.createElement("div");
root.id = "crx-root";
document.body.append(root);

createRoot(root).render(<App />);
