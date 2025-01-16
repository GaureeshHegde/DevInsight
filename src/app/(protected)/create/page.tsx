'use client';

import React from 'react'
import {useForm} from 'react-hook-form';
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";

type FormInput = {
    repoUrl: string;
    projectName: string;
    githubToken?: string;
}
const CreatePage = () => {

    const {register,handleSubmit,reset} = useForm<FormInput>();

    function onSubmit(data: FormInput){
        window.alert(JSON.stringify(data, null, 2));
        return true;
    }

  return (
    <div className='flex items-center gap-12 h-full justify-center'>
        <img src = '/undraw_github.svg' className='w-auto h-56'/>
        <div>
            <div>
                <h1 className='font-semibold text-2xl'>
                Link your Github Repository
                </h1>
                <p className='text-sm text-muted-foreground'>
                    Enter the URL of your Github repository to link it to DevInsight
                </p>
            </div>
            <div className = 'h-4'></div>
            <div>
                <form onSubmit = {handleSubmit(onSubmit)}>
                    <Input  {...register("repoUrl", {required: true})}
                    placeholder = 'Project Name'
                    required/> 

                    <div className='h-2'></div>

                    <Input  {...register("repoUrl", {required: true})}
                    placeholder = 'Github URL'
                    type = 'url'
                    required/>                      
                    
                    <div className='h-2'></div>

                    <Input  {...register("githubToken")}                    
                    placeholder = 'Github Token( Optional )'
                    />

                    <div className='h-4'></div>
                    <Button type='submit'>Create Project</Button>
                </form>
            </div>
        </div>
    </div>
  )
}
export default CreatePage;
