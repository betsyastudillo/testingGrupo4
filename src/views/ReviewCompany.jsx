export function ReviewCompany() {
    return(
        <div classNameName="container mt-5">
            <div classNameName="d-flex justify-content-between align-items-center mb-4">
                <h2 classNameName="fww-bold">Project Details</h2>
            </div>
            <div classNameName="row">
                <div classNameName="col-lg-8">
                    <div className="card p-4 mb-4">
                        <h3 classNameName="fw-bold">Delivery App Project</h3>
                        <p classNameName="text-muted">UI/UX Design</p>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus?
                        Primum quid tu dicis breve?
                        </p>
                        <div classNameName="d-flex align-items-center mb-4">
                            <img src="https://via.placeholder.com/40" alt="Profile" className="rounded-circle me-2"/>
                            <span>Clarke G.</span>
                        </div>
                        <div className="row text-center">
                            <div className="col">
                                <div className="mb-2">
                                    <i className="bi bi-pencil-square fs-3"></i>
                                </div>
                                <p className="fw-bold">UI/UX Design</p>
                            </div>
                            <div className="col">
                                <div className="mb-2">
                                    <i className="bi bi-clock fs-3"></i>
                                </div>
                                <p className="fw-bold">1 Week Sprints</p>
                            </div>
                            <div className="col">
                                <div className="mb-2">
                                    <i className="bi bi-calendar fs-3"></i>
                                </div>
                                <p className="fw-bold">3 Months</p>
                            </div>
                            <div className="col">
                                <div className="mb-2">
                                    <i className="bi bi-cash fs-3"></i>
                                </div>
                                <p className="fw-bold">Fixed</p>
                            </div>
                        </div>
                    </div>

                    <div className="card p-4">
                        <h4 className="fw-bold mb-3">Recent Files</h4>
                        <ul className="list-group">
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                company-ux-guide.pdf <span className="badge bg-secondary">4.7MB</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                tech-summit-expenses.xlsx <span className="badge bg-secondary">34KB</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                ux-presentation.pptx <span className="badge bg-secondary">2.3MB</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                website-homepage-redesign.ai <span className="badge bg-secondary">4.8MB</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card p-4 mb-4">
                        <h4 className="fw-bold">Customer</h4>
                        <p className="mb-2">Flashlite</p>
                        <div className="progress mb-3">
                            <div className="progress-bar" role="progressbar" style={{width: '75%'}}>75%</div>
                        </div>
                    </div>

                    <div className="card p-4 mb-4">
                        <h4 className="fw-bold">Project Tools</h4>
                        <ul className="list-unstyled">
                            <li className="mb-2"><i className="bi bi-palette me-2"></i> Sketch</li>
                            <li className="mb-2"><i className="bi bi-vector-pen me-2"></i> Illustrator</li>
                            <li className="mb-2"><i className="bi bi-brush me-2"></i> Photoshop</li>
                        </ul>
                    </div>

                    <div className="card p-4">
                        <h4 className="fw-bold">Project Stacks</h4>
                        <ul className="list-unstyled">
                            <li className="mb-2"><i className="bi bi-code me-2"></i> HTML5</li>
                            <li className="mb-2"><i className="bi bi-code-slash me-2"></i> JavaScript</li>
                            <li className="mb-2"><i className="bi bi-boxes me-2"></i> Vue</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}