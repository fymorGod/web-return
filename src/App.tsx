
interface ButtonProps {
  text?: string;
}

function Button(props: ButtonProps) {
  return <button>{props.text ?? 'Default'}</button>
}


function App() {
  return (
    <>
      <h1>hello world</h1>
      <Button text="enviar"/>
    </>
  )
}

export default App
