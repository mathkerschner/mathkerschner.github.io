import React, { useState } from "react"
import axios from "axios";

import "../sass/form.scss"

const FormContato = () => {
   
    const [serverState, setServerState] = useState({
        submitting: false,
        status: null,
        phone: ""
    });

    const handleServerResponse = (ok, msg, form) => {
        setServerState({
            submitting: false,
            status: { ok, msg }
        });
        if (ok) {
            form.reset();
        }
    };

    const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        setServerState({ submitting: true });
        axios({
            method: "post",
            url: "https://getform.io/f/253f8905-a2d9-49d2-b9c4-d3d11cbf227b",
            data: new FormData(form)
        })
            .then(r => {
                handleServerResponse(true, "Thanks!", form);
            })
            .catch(r => {
                handleServerResponse(false, r.response.data.error, form);
            });
    };
    const addMaskTel = e => {
        let string = e.target.value;
        string = string.replace(/-/g, "");

        var regex = /^([^\s]{2})([^\s]{3})([^\s]{3})([^\s]{3})$/g;
        const match = regex.exec(string);
        console.log(match);

         if (match) {
             match.shift();
             string = match.join(".")
           }
        console.log(string)
        setServerState({ phone: string });
    };
    return (
        <div id="form-container" className="container-fluid">
            <div className="row justify-content-center mb-160">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <form id="form" onSubmit={handleOnSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">E-mail<span className="req">*</span></label>
                            <input type="email" name="email" id="email" aria-describedby="e-mail" placeholder="" required="required" /><br />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Nome<span className="req">*</span></label>
                            <input type="text" name="name" id="name" aria-describedby="nome" placeholder="" required="required" /><br />
                        </div>
                        <div className="form-group">
                            <label htmlFor="tel">Telefone<span className="req">*</span></label>
                            <input type="tel" name="tel" id="tel" aria-describedby="telefone" placeholder="" value={serverState.phone} onChange={addMaskTel} required="required" maxLength="13" /><br />
                        </div>
                        <button type="submit" disabled={serverState.submitting} className="btn btn-submit"><span>Enviar</span></button>
                        {serverState.status && (
                            <p className={!serverState.status.ok ? "errorMsg" : ""}>
                                {serverState.status.msg}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    )
}
export default FormContato