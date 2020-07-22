import React, { useState } from "react"
import {
  Button,
  CSSReset,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  ThemeProvider,
} from "@chakra-ui/core"

export default () => {
  const [inputText, setInputText] = useState("")
  const [response, setResponse] = useState("")

  // const handleSubmit = () => {}
  const handleSubmit = (event: React.FormEvent) => {
    setResponse(window.electron.sendInputText(inputText))
    event.preventDefault()
  }

  return (
    <div className="App">
      <ThemeProvider>
        <CSSReset />
        <Heading> Hello, World! from React </Heading>
        <FormControl>
          <FormLabel htmlFor="input-text">Input text:</FormLabel>
          <Input
            onChange={(event: React.ChangeEvent<{ value: string }>) =>
              setInputText(event.target.value)
            }
            value={inputText}
            type="text"
            id="input-text"
          />
          <Button onClick={handleSubmit}>Submit</Button>
        </FormControl>
        {response && response !== "" && (
          <>
            <Heading>Response was:</Heading>
            <Text>{response}</Text>
          </>
        )}
      </ThemeProvider>
    </div>
  )
}
