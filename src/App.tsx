import React from 'react'
import './App.css'
import { HeaderBar } from './HeaderBar'

function App() {
  const weights: Array<any> = [
    {
      id: 1,
      date: '2020-01-01',
      weight: 90,
      comment: '',
    },
    {
      id: 2,
      date: '2020-01-02',
      weight: 91,
      comment: '',
    },
    {
      id: 3,
      date: '2020-01-03',
      weight: 91.2,
      comment: '',
    },
  ]

  return (
    <div className="App">
      <HeaderBar />
      <div>
        {weights.map((item) => {
          return (
            <>
              <dl>
                <dt>日付</dt>
                <dd>{item.date}</dd>
              </dl>
              <dl>
                <dt>体重</dt>
                <dd>{item.weight}</dd>
              </dl>
              <dl>
                <dt>コメント</dt>
                <dd>{item.comment}</dd>
              </dl>
            </>
          )
        })}
        <dl>
          <dt>体重</dt>
          <dd></dd>
        </dl>
      </div>
    </div>
  )
}

export default App
