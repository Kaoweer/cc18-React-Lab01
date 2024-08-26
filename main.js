function App(){
    // const curDate = new Date().getTime()/1000/60/60/24
    // const birthDate = new Date("2001-06-14").getTime()/1000/60/60/24
    // const dateDiff =  Math.floor(curDate-birthDate)
    // const yearDiff = Math.floor((curDate-birthDate)/365)
    // const monthDiff = Math.floor((curDate-birthDate)/31)
    // console.log(dateDiff/365)

    const date = new Date().getDate()
    const month = new Date().getMonth()
    const year = new Date().getFullYear()
    const style = {color : 'deeppink',backgroundColor : 'black'}
    const name = 'Sirawich Fongchai'
    
    const birthYear = 2001
    const birthMonth = 9

    let accMonth = month >= birthMonth ? month-birthMonth : month+12-birthMonth+1
    let accYear = month >= birthMonth ? year-birthYear : year-birthYear-1

    return (
        <div>
        <h1 style = {style}>{name}</h1>
        <p style = {style}>Age : {accYear} Years, {accMonth} Months</p>
        </div>
    )
}
ReactDOM.createRoot(document.querySelector("#root")).render(<App />);