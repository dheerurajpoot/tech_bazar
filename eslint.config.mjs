import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.extends("next/core-web-vitals"),
	{
		rules: {
			// Disable `no-new-func` to allow function serialization
			"no-new-func": "off",
			// Add additional custom rules or adjustments for serialization issues if needed
		},
	},
];

export default eslintConfig;
