//
//  ___FILENAME___
//  ___PROJECTNAME___
//
//  Created ___FULLUSERNAME___ on ___DATE___.
//  Copyright © ___YEAR___ ___ORGANIZATIONNAME___. All rights reserved.
//
//

import UIKit

final public class ___FILEBASENAMEASIDENTIFIER___: UIView {
    
    // MARK: - UI
    
    private lazy var view: UIView = {
        let view = UIView()
        view.translatesAutoresizingMaskIntoConstraints = false
        view.backgroundColor = .white
        return view
    }()
    
    // MARK: - PUBLIC API

    public weak var delegate: ___VARIABLE_featureName___ViewDelegate?
    
    // MARK: - INITIALIZERS
    
    override init(frame: CGRect = .zero) {
        super.init(frame: frame)
        setup()
    }

    @available (*, unavailable)
    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    // MARK: - PRIVATE
    
    func setup() {
        buildViewHierarchy()
        addConstraints()
    }
    
    private func buildViewHierarchy() {
        addSubview(view)
    }
    
    private func addConstraints() {
        view.constraintToSuperview()
    }
    
    private func updateView(with entity: ___VARIABLE_featureName___ViewEntity) {
        
    }
}

extension ___FILEBASENAMEASIDENTIFIER___: ___VARIABLE_featureName___ViewProtocol {
    public func updateView(with viewState: ___VARIABLE_featureName___ViewState) {
        
    }
}
