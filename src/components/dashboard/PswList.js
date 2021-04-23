import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { TextField, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import { getPsws } from "../../actions/psw";
import UserList from "../user/UserList";

function PswList(props) {
  const { getPsws, pswList } = props;
  const [searchId, setSearchId] = useState("");
  useEffect(() => {
    getPsws();
  }, [getPsws]);

  const dynamicpswList = () => {
    return pswList.filter((psw) => {
      psw.id.includes(searchId);
    });
  };
  return (
    <>
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      ></TextField>
      <UserList users={pswList} type="psw" />
    </>
  );
}

const mapStateToProps = (state) => {
  return { pswList: Object.values(state.psws) };
};
export default connect(mapStateToProps, { getPsws })(PswList);
