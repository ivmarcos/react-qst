import React from 'react'

const Upload = ({onSubmit, onChangeInputFile, onChangeTextFile, codigoPagina}) => {

  return (
      <div style={{margin: 10}} className="mdl-layout">

        <div className="android-more-section">

            <div className="android-section-title mdl-typography--display-1-color-contrast">Upload</div>

            <form onSubmit={onSubmit}>
                <div className="mdl-grid">

                    <div className="mdl-textfield mdl-js-textfield mdl-cell--12-col">
                        <input onChange={onChangeInputFile} id="arquivo" type="file" className="mdl-textfield__input"/>
                    </div>

                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-cell--12-col">
                        <label className="mdl-textfield__label" htmlFor ="titulo">Título</label>
                        <input type="text" id="titulo" className="mdl-textfield__input" onChange={onChangeTextFile}/>
                    </div>

                    <button type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                      Enviar
                    </button>

                </div>
            </form>
        </div>
      </div>
  )

}

export default Upload
