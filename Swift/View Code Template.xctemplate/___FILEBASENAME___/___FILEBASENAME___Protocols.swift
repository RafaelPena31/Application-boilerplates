//
//  ___FILENAME___
//  ___PROJECTNAME___
//
//  Created ___FULLUSERNAME___ on ___DATE___.
//  Copyright © ___YEAR___ ___ORGANIZATIONNAME___. All rights reserved.
//
//

public protocol ___VARIABLE_featureName___ViewControllerProtocol: AnyObject {
    var contentView: ___VARIABLE_featureName___ViewProtocol? { get }
    var viewModel: ___VARIABLE_featureName___ViewModelProtocol? { get }
    var delegate: ___VARIABLE_featureName___ViewControllerDelegate? { get set }
    func updateView(with viewState: ___VARIABLE_featureName___ViewState)
}

public protocol ___VARIABLE_featureName___ViewModelProtocol: AnyObject {
    var viewController: ___VARIABLE_featureName___ViewControllerProtocol? { get }
    var viewEntity: ___VARIABLE_featureName___ViewEntity? { get set }
    var viewState: ___VARIABLE_featureName___ViewState { get }
    
    func initState()
}

public protocol ___VARIABLE_featureName___ViewControllerDelegate: AnyObject {
    
}
