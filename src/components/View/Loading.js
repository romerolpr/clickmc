const Loading = ({ label = true, textLabel }) => (
<div className="d-flex justify-content-center flex-wrap p-4">
    { label && (
        <div className="col-12">
            <p className="text-center">{ textLabel == undefined ? 'Aguarde...' : textLabel }</p>
        </div>
    ) }
    <div className="spinner-border text-dark"></div>
</div>
)

export { Loading }