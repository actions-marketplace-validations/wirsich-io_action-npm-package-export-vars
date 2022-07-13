import { getInput, setFailed, exportVariable } from '@actions/core';
import { findPackageJson, extract, PackageFile } from './util';
import flatten from 'flat';

const prefix = 'PKG';
const skip = ['scripts', 'devDependencies', 'dependencies'];
const removeProperty = (propKey: string, { [propKey]: propValue, ...rest }) => rest;
const removeProperties = (object: any, ...keys: any): any => (keys.length ? removeProperties(removeProperty(keys.pop(), object), ...keys) : object);

async function run(): Promise<void> {
	try {
		const followSymbolicLinks: boolean = getInput('follow-symlinks').toLowerCase() !== 'false';
		const path: string = getInput('path')
			? process.env.GITHUB_WORKSPACE + '/' + getInput('path')
			: await findPackageJson(followSymbolicLinks);

		let packageFile: PackageFile = await extract(path);
		packageFile = removeProperties(packageFile, ...skip);

		const pkgValues: [] = flatten(packageFile, {
			delimiter: '_',
			transformKey: (key: string) => {
				return key.toUpperCase();
			}
		});
		console.log(pkgValues);
		Object.entries(pkgValues).forEach((entry: any) => {
			const [varName, value] = entry;
			exportVariable(`${prefix}_${varName}`, value);
		});
	} catch (error: any) {
		setFailed(error.message);
	}
}

run();
