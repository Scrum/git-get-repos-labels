import test from 'ava';
import gitGetReposLabels from './index';

test('pkg is function', t => {
	t.is(typeof gitGetReposLabels, 'function');
});