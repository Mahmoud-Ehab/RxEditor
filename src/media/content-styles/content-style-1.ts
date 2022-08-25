const style = `
.primeTitleElement {
  text-align: center;
  padding: 30px;
  font-size: 250%;
  font-weight: bolder;
  border-radius: 5px;
  color: #f6f6f6;
  background-color: #222; 
  page-break-before: always;
}

.secTitleElement {
  padding: 20px 40px;
  font-size: 200%;
  font-weight: bold;
  border: solid 5px black;
  border-radius: 5px;
  color: #f1f1f1;
  background-color: #444; 
  page-break-before: auto;
}

* {
  margin: 0;
  padding: 0;
}

body {
  font-family: sans-serif;
  color: #444;
}

h1 {
  color: #222;
  padding: 0 10px;
  margin: 20px 0 10px 0;
  border-bottom: solid 2px #444;
  page-break-before: auto;
}

h2, h3 {
  color: #333;
  margin: 15px 0 5px 0;
}

div, p {
  margin: 20px 0;
  text-align: justify;
}

ol, ul {
  margin: 0 45px;
}

li {
  margin: 10px 0;
}

code {
  display: block;
  padding: 25px;
  margin: 25px;
  border-radius: 10px;
  box-shadow: 0 0 10px 2px #00000011;
  color: #eee;
  background-color:#333;
}

note {
  display: block;
  padding: 25px;
  margin: 25px;
  border-radius: 0 20px 0 20px;
  background-color:#eaeaea;
}
`

export default style;