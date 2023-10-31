import { dirname } from "path";
import { fileURLToPath } from "url";

export const __filename = fileURLToPath(dirname(import.meta.url));
export const __dirname = dirname(dirname(__filename));
