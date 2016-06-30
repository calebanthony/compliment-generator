'use strict'

const goodWords = ["kind", "gentle", "good-hearted", "hospitable", "gracious", "generous",
                  "bighearted", "light-hearted", "good", "giving", "wonderful", "marvellous",
                  "terrific", "grand", "fantastic", "phenomenal", "great", "neat", "superb",
                  "super", "winning", "stand-up", "amazing", "awesome", "excellent",
                  "outstanding", "one-of-a-kind", "genuine", "likeable", "remarkable",
                  "flipping great", "hireable", "fun to be around", "friendly"]

const goodAdverbs = ["truly", "really", "honestly", "seriously", "genuinely", "truthfully",
                    "literally", "sincerely"]

const getNewCompliment = (r) => {
  return r[Math.floor(Math.random()*r.length)]
}

let GeneratedCompliment = React.createClass({
  getInitialState: function() {
    return {compliment1: '', compliment2: '', adverb: ''}
  },
  getCompliment: function() {
    this.setState({compliment1: getNewCompliment(goodWords)})
    this.setState({compliment2: getNewCompliment(goodWords)})
    this.setState({adverb: getNewCompliment(goodAdverbs)})
  },
  componentDidMount: function() {
    this.getCompliment()
    setInterval(this.getCompliment, 5000)
  },
  render: function() {
    return (
      <div className='compliment'>
        You are {this.state.adverb} just so {this.state.compliment1} and {this.state.compliment2}.
      </div>
    )
  }
})

ReactDOM.render(
  <GeneratedCompliment />,
  document.getElementById('complimentArea')
)
