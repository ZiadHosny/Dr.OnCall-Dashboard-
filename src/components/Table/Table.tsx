import React, { ReactNode, useState } from 'react'
import { useSampleClients } from '../../hooks/sampleData'
import Button from '../Button'
import Buttons from '../Buttons'
import CardBoxModal from '../CardBox/Modal'

type Props = {
    tableHeads: string[],
    tableBody: ReactNode
    perPage: number,
}

const ZTable = ({ tableHeads, perPage, tableBody }: Props) => {
    const { clients } = useSampleClients()

    const [currentPage, setCurrentPage] = useState(0)

    const clientsPaginated = clients.slice(perPage * currentPage, perPage * (currentPage + 1))

    const numPages = clients.length / perPage

    const pagesList = []

    for (let i = 0; i < numPages; i++) {
        pagesList.push(i)
    }

    const [isModalTrashActive, setIsModalTrashActive] = useState(false)

    const handleModalAction = () => {
        // setIsModalInfoActive(false)
        setIsModalTrashActive(false)
    }

    return (
        <>
            <CardBoxModal
                title="Please confirm"
                buttonColor="danger"
                buttonLabel="Confirm"
                isActive={isModalTrashActive}
                onConfirm={handleModalAction}
                onCancel={handleModalAction}
            >
                <p>
                    Lorem ipsum dolor sit amet <b>adipiscing elit</b>
                </p>
                <p>This is sample modal</p>
            </CardBoxModal>

            <div className="overflow-auto max-h-96">

                <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr>
                            <th />
                            {tableHeads?.map((tableHead) => <th key={tableHead}>{tableHead}</th>)}
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {tableBody}
                    </tbody>
                </table>

            </div>

            <div className="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
                <div className="flex flex-col md:flex-row items-center justify-between py-3 md:py-0">
                    <Buttons>
                        {pagesList.map((page) => (
                            <Button
                                key={page}
                                active={page === currentPage}
                                label={page + 1}
                                color={page === currentPage ? 'lightDark' : 'whiteDark'}
                                small
                                onClick={() => setCurrentPage(page)}
                            />
                        ))}
                    </Buttons>
                    <small className="mt-6 md:mt-0">
                        Page {currentPage + 1} of {numPages}
                    </small>
                </div>
            </div>
        </>
    )
}

export default ZTable
