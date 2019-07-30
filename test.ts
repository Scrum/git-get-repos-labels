import test from 'ava';
import gitReposLabels from './index';

test('pkg is function', t => {
	t.is(typeof gitReposLabels, 'function');
});