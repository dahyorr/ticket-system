import React from "react";
import {Form, Field} from 'react-final-form'
import {connect} from 'react-redux'
import signIn from "../../Actions/signIn";

class LoginForm extends React.Component {
    renderError({error, touched}){
        if(touched && error){
            return (
                        <p className={'text-sm text-red-800'}>{error}</p>
            )
        }
    }

    renderInput = ({input, name, placeholder, label, meta}) => {
        const className = `${meta.error && meta.touched ? 'border-red-900 bg-red-100': ''}`

        return (
            <div >
                <label htmlFor={label.toLowerCase()} className="sr-only">{label}</label>
                <input {...input} placeholder={placeholder} name={name}
                       className={`${className} appearance-none rounded-none relative block w-full px-3 py-2 my-2 border
                        border-steel-dark placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none 
                        focus:ring-steel focus:border-steel focus:z-10 sm:text-sm`}
                       />

                {this.renderError(meta)}
            </div>
        )
    }

    onSubmit = (formValues)=>{
        this.props.signIn(formValues, this.props.preLoginPath ? this.props.preLoginPath : null  )
    }
    validate = (formValues) =>{
        const errors = {}
        if(!formValues.email){
            errors.email = 'You must enter an email'
        }
        if(!formValues.password){
            errors.password = 'You must enter a Password'
        }
        return errors
    }


    render() {
        return (
               <>
                   <form  >

                           <div>

                           </div>
                   </form>

                   <Form
                       className={'LoginForm'}
                       onSubmit={this.onSubmit}
                       validate={this.validate}
                       render={({handleSubmit}) => (
                           <form onSubmit={handleSubmit} className="mt-2 space-y-6">
                               <div className="rounded-md shadow-sm -space-y-px">
                               <Field name={"email"} component={this.renderInput} placeholder={"Email Address"} type={"email"} label={'Email Address'}/>
                               <Field name={"password"} component={this.renderInput} placeholder={"Password"} label={'Password'} type={"password"}/>
                               </div>
                               <button type="submit"
                                       className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium c text-white bg-steel-light hover:bg-steel focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-steel">
                                   <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                       <svg className="h-5 w-5 text-steel-dark group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                           <path fillRule="evenodd"
                                                 d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                                 clipRule="evenodd"/></svg>
                                   </span>
                                   Sign in
                               </button>
                           </form>
                       )}
                   />
               </>
        )
    }
}
const mapStateToProps = state =>{
    return{
        preLoginPath: state.auth.preLoginPath
    }
}
export default connect(mapStateToProps, {signIn})(LoginForm)