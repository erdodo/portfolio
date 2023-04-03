export default function About({profile}) {
    return (
        <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">About</h1>

            <div className=" overflow-auto" style={{height:"calc(100vh - 174px)"}}>
                <div className="content" dangerouslySetInnerHTML={{__html: profile.description}}></div>
            </div>


        </div>
    )

}