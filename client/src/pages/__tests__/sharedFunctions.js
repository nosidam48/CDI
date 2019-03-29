import { cleanup } from 'react-testing-library'
import { calculateAge } from '../../utils/functions';

afterEach(() => {
    cleanup();
    console.log("Calculate age ran");
})

test('calculateAge', () => {
    const today = new Date()
    const age = calculateAge("2006-03-28", today);
    expect(age).toBe(13);
});

test('calculateAge with bad date string', () => {
    const today = new Date()
    const age = calculateAge("bad string", today);
    expect(age).toBe("");
});

