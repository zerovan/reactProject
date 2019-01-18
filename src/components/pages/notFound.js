import React from 'react'

export default function notFound() {
    return (
        <div className="container text-right" >
            <h1>
                <span className="text-danger">404 not found</span>
                <h1 className="mt-5" style={{ direction: 'rtl' }}>متاسفانه صفحه ی مورد نظر یافت نشد.</h1>
            </h1>
        </div>
    )
}
