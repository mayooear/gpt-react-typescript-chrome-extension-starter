import { createRoot } from "react-dom/client";
import Options from "./options";
import "../index.css";

const root = document.createElement("div");
root.id = "crx-root";
document.body.append(root);

createRoot(root).render(<Options />);
