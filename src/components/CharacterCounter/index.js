import {Component} from 'react'
import {v4} from 'uuid'
import Character from '../Character'
import './index.css'

class CharacterCounter extends Component {
  state = {searchInput: '', displayList: []}

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onAddWordIntoList = event => {
    event.preventDefault()
    const {searchInput, displayList} = this.state
    console.log(searchInput)
    const stringValue = `${searchInput} : ${searchInput.length}`
    const wordObject = {
      id: v4(),
      msg: stringValue,
    }
    console.log(wordObject.msg)
    this.setState(prevState => ({
      displayList: [...prevState.displayList, wordObject],
      searchInput: '',
    }))
  }

  render() {
    const {searchInput, displayList} = this.state
    return (
      <div className="app-container">
        <div className="WordsListContainer">
          <h1 className="head">
            Count the characters like a <br />
            Boss ...
          </h1>
          {displayList.length === 0 ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user Inputs"
              className="image"
            />
          ) : (
            <ul className="unOrderedList">
              {displayList.map(each => (
                <Character key={each.id} details={each} />
              ))}
            </ul>
          )}
        </div>
        <div className="InputContainer">
          <h1 className="counter-head">Character Counter</h1>
          <form className="search-container" onSubmit={this.onAddWordIntoList}>
            <input
              type="text"
              placeholder="Enter the Characters here"
              className="input"
              value={searchInput}
              onChange={this.onChangeInput}
            />
            <button type="submit" className="addBtn">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default CharacterCounter
