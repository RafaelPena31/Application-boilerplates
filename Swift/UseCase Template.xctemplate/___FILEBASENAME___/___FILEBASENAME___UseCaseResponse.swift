//
// ___FILEHEADER___
//

import Foundation

public struct ___VARIABLE_productName:identifier___UseCaseResponse: Codable {
    public let meta: InvestmentsMetaResponse
    public let data: ___VARIABLE_productName:identifier___Data?
}

public struct ___VARIABLE_productName:identifier___Data: Codable {
    public let action: InvestmentsResponseActionType
    public let content: ___VARIABLE_productName:identifier___DataContent?
    public let dialog: Dialog?
}

public struct ___VARIABLE_productName:identifier___DataContent: Codable {
    
}
