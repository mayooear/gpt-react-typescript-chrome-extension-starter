import { createRoot } from "react-dom/client";
import Content from "./content";
import "../index.css";

const root = document.createElement("div");
root.id = "crx-root";
document.body.append(root);

createRoot(root).render(<Content />);
