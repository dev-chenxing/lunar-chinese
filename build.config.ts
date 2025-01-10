export default {
	entries: ["src/index",
		{
			builder: 'mkdist',
			input: './src',
			outDir: './dist'
		},
		],
		clean: true,
		declaration: true,
		rollup: {
			emitCJS: true,
		},
};
