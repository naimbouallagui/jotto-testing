import {correctGuess, actionTypes} from './'

describe('correctGuess', ()=>{
    test('returns an action with type ``CORRECT_GUESS', ()=>{
        const action = correctGuess();
        // toBe for immutable(number, string,..), toEqual for mutable({}, [])
        expect(action).toEqual({type: actionTypes.CORRECT_GUESS})
    })
})