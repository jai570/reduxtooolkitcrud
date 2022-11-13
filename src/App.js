import { Container, CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { Route, Routes } from "react-router-dom";

import theme from "./theme";

import Students from "./components/Students";
import Student from "./components/Student";
import AddStudent from "./components/AddStudent";
import EditStudent from "./components/EditStudent";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <Routes>
            <Route exact path="/" element={<Students />} />
            <Route exact path="/students/create" element={<AddStudent />} />
            <Route exact path="/students/:id" element={<Student />} />
            <Route exact path="/students/:id/edit" element={<EditStudent />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
