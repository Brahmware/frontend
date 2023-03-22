import React, { useState } from 'react'
import { useLoginMutation } from '../../features/auth/authApiSlice';
import { LoadingButton } from '@mui/lab';
import { useHistory } from 'react-router-dom';
import { Checkbox, FormControlLabel } from '@mui/material';
import usePersist from '../../hooks/usePersist';


const WebAdminLogin = () => {

    const [inputs, setInputs] = useState({});
    const [persist, setPersist] = usePersist();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const [login, { isLoading }] = useLoginMutation();
    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await login({ ...inputs }).unwrap();
            history.push('/mission-control');
        } catch (error) {
            console.error(error);
        }
    }


    const handleChecked = (event) => {
        setPersist(event.target.checked);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label className='one-line'>
                <p className='anotate-web-admin'>webEditor</p>
                <p className='punctuation'>.</p>
                <p className='anotate-field'>username</p>
                <p className="punctuation">:</p>
                <input
                    type="text"
                    name="username"
                    value={inputs.username || ""}
                    onChange={handleChange}
                />
            </label>
            <label className='one-line'>
                <p className='anotate-web-admin'>webEditor</p>
                <p className='punctuation'>.</p>
                <p className='anotate-field'>password</p>
                <p className="punctuation">:</p>
                <input
                    type="password"
                    name="password"
                    value={inputs.password || ""}
                    onChange={handleChange}
                />
            </label>
            <label className="submit one-line">
                <p className='anotate-web-admin'>webEditor</p>
                <p className='punctuation'>.</p>
                <p className='anotate-field'>rememberMe</p>
                <p className="punctuation" style={{ marginLeft: '0.3em' }} >=</p>
                <p className="punctuation">{"("}</p>
                <p className='anotate-web-admin'>&#x2713;</p>
                <p className="punctuation">{")"}</p>
                <p className="punctuation">&#8658;</p>
                <p className='anotate-field' style={{ marginLeft: '0.3em' }}>return</p>
                <p className="punctuation">{"("}</p>
                <FormControlLabel
                    sx={{ marginLeft: '0', marginRight: "0" }}
                    control={
                        <Checkbox
                            size='medium'
                            checked={persist}
                            onChange={handleChecked}
                        />
                    }
                />
                <p className="punctuation">{")"}</p>
            </label>
            <label className="submit one-line">
                <p className='anotate-web-admin'>webEditor</p>
                <p className='punctuation'>.</p>
                <p className='anotate-field'>login</p>
                <p className="punctuation" style={{ marginLeft: '0.3em' }} >=</p>
                <p className="punctuation">{"("}</p>
                <p className='anotate-web-admin'>event</p>
                <p className="punctuation">{")"}</p>
                <p className="punctuation">&#8658;</p>
                <LoadingButton
                    className="submit-btn"
                    variant='outlined'
                    loading={isLoading}
                    loadingPosition='start'
                    type='submit'
                    fullWidth
                    startIcon={<></>}
                    sx={{
                        borderRadius: '2em',
                        marginLeft: '0.3em',
                        marginTop: '0.2em',
                        paddingLeft: '0.6em',
                        letterSpacing: '0.1em',
                    }}
                >
                    SUBMIT
                </LoadingButton>
            </label>
        </form>
    )
}

export default WebAdminLogin