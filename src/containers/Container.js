export const Container = ({ fluid, full, children }) => (
    <div className={fluid ? "container-fluid" : "container"} style={{
        padding: full ? '0' : 'inherit'
    }}>
        { children }
    </div>
)