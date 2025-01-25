'use client';

import React from 'react'
import { useForm } from 'react-hook-form';
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import { api } from '~/trpc/react';
import { toast } from 'sonner';
import useRefetch from '~/hooks/useRefetch';

type FormInput = {
    projectName: string;
    repoUrl: string;
    githubToken?: string;
}

const CreatePage = () => {
    const { register, handleSubmit, reset } = useForm<FormInput>();
    const createProject = api.project.createProject.useMutation();
    const refetch = useRefetch();
    function onSubmit(data: FormInput) {
        window.alert(JSON.stringify(data, null, 2));
        createProject.mutate({
            githubUrl: data.repoUrl,
            name: data.projectName,
            githubToken: data.githubToken
        }, {
            onSuccess: () => {
                toast.success('Project created successfully');
                reset();
            },
            onError: () => {
                toast.error('Failed to create project');
            }
    })
        return true;
    }

    return (
        <div className="mx-auto max-w-2xl">
            <div className="flex items-center gap-4">
                <img 
                    src="/logo.png" 
                    alt="" 
                    className="h-8 w-8"
                />
                <div>
                    <h1 className="text-2xl font-semibold">
                        Link your Github Repository
                    </h1>
                    <p className="text-muted-foreground">
                        Enter the URL of your Github repository to link it to DevInsight
                    </p>
                </div>
            </div>

            <form onSubmit={handleSubmit((data) => onSubmit(data))} className="mt-8 space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="projectName">Project Name</Label>
                    <Input
                        id="projectName"
                        {...register("projectName", { required: true })}
                        placeholder="Enter project name"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="repoUrl">Github URL</Label>
                    <Input
                        id="repoUrl"
                        type="url"
                        {...register("repoUrl", { required: true })}
                        placeholder="https://github.com/username/repo"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="githubToken">Github Token (Optional)</Label>
                    <Input
                        id="githubToken"
                        type="password"
                        {...register("githubToken")}
                    />
                </div>

                <Button type="submit" disabled={createProject.isPending} className="w-full">
                    Create Project
                </Button>
            </form>
        </div>
    );
}

export default CreatePage;

