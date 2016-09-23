import React from 'react'
import { connect } from 'react-redux'
import Upload from 'components/Upload'
import {enviaArquivo} from 'actions'



const mapStateToProps = (state, ownProps) =>{
    return {
        enviado : state.upload.enviado,
        codigoPagina : ownProps.codigoPagina,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {

    let file, text;

  return {

      onSubmit : (e) => {
          e.preventDefault();
          var formData = new FormData();
          formData.append('file', file);
          formData.append('codigoPagina', ownProps.codigoPagina);
          formData.append('tituloArquivo', text);
          dispatch(enviaArquivo(formData));
      },

      onChangeInputFile : (e) =>{
          file = e.target.files[0];
      },

      onChangeTextFile : (e) =>{
          text = e.target.value;
      }
  }

}

const UploadLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Upload)

export default UploadLink;
