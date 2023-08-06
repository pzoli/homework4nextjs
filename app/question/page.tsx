"use client";

import React from 'react'
import { DataTable } from "primereact/datatable"
import { Column } from "primereact/column"
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

export default function Questoin() {

    const { data: questionValues, status: dataFetchStatus, isLoading: isDataLoading } = useQuery({
        queryKey: ["question"],
        queryFn: async () => {
            const res = await fetch(`/api/question`);
            return res.json();
        }
    });

    return (
        <>
            <DataTable value={questionValues} loading={isDataLoading}>
                <Column field='question' header="Question"></Column>
            </DataTable>
            <Link href="/">Home</Link>
        </>
    )
}