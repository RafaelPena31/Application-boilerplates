//
//  ___FILENAME___
//  ___PROJECTNAME___
//
//  Created ___FULLUSERNAME___ on ___DATE___.
//  Copyright © ___YEAR___ ___ORGANIZATIONNAME___. All rights reserved.
//
//
import UIKit

public protocol ___FILEBASENAMEASIDENTIFIER___: AnyObject {
    var content: UIView { get }
    var delegate: ___VARIABLE_featureName___ViewDelegate? { get set }
    func updateView(with viewState: ___VARIABLE_featureName___ViewState)
}

public protocol ___VARIABLE_featureName___ViewDelegate: AnyObject {
    // events clicks on view
}

extension ___FILEBASENAMEASIDENTIFIER___ where Self: UIView {
    public var content: UIView { return self }
}
