import React from 'react';
import { render, cleanup } from 'react-testing-library'
import { calculateAge } from '../Kids';

afterEach(() => {
    cleanup();
    console.log("Calculate age ran");
})

test('calculateAge', () => {
    const today = new Date()
    const age = calculateAge("2006-03-28", today);
    expect(age).toBe(13);
});