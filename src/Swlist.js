import React, { useMemo } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useQuery } from "react-query";
import { getSwData } from "./fetchData";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const Swlist = () => {
  const classes = useStyles();

  const { data } = useQuery("sw", getSwData);
  console.log(data);
  const charactersData = data.sort((a, b) => a.name.localeCompare(b.name));
  const alphabet = useMemo(() => "abcdefghijklmnopqrstuvwxyz".split(""));
  const listElements = alphabet.map((element) => {
    const regex = new RegExp(`^${element}`, "i");
    const filteredCharactersData = charactersData.filter((character) =>
      regex.test(character.name)
    );

    return (
      <TableBody key={element}>
        <StyledTableRow>
          <StyledTableCell
            scope="row"
            colSpan="6"
            style={{
              color: "red",
              background: "black",
              padding: "10px 10px",
              textTransform: "uppercase",
            }}
          >
            {element}
          </StyledTableCell>
        </StyledTableRow>
        {filteredCharactersData.map((character) => {
          return (
            <StyledTableRow key={element + character.name}>
              <StyledTableCell>{character.name}</StyledTableCell>
              <StyledTableCell>{character.eye_color}</StyledTableCell>
              <StyledTableCell>{character.gender}</StyledTableCell>
              <StyledTableCell>{character.hair_color}</StyledTableCell>
              <StyledTableCell>{character.height}</StyledTableCell>
              <StyledTableCell>{character.mass}</StyledTableCell>
            </StyledTableRow>
          );
        })}
      </TableBody>
    );
  });

  console.log(charactersData);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Eyes Color</StyledTableCell>
            <StyledTableCell>Gender</StyledTableCell>
            <StyledTableCell>Hair Color</StyledTableCell>
            <StyledTableCell>Height</StyledTableCell>
            <StyledTableCell>Mass</StyledTableCell>
          </TableRow>
        </TableHead>
        {listElements}
      </Table>
    </TableContainer>
  );
};

export default Swlist;
