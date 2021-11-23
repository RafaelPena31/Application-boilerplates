//
// ___FILEHEADER___
//

import Foundation
import Domain
import RxSwift

public class ___VARIABLE_productName:identifier___UseCase {
 
    public typealias UseCaseEvent = Result<___VARIABLE_productName:identifier___UseCaseResponse, MessageError>
    private let service: ServiceProtocol
    
    public init(service: ServiceProtocol) {
        self.service = service
    }
}

extension ___VARIABLE_productName:identifier___UseCase: ___VARIABLE_productName:identifier___UseCaseProtocol {
 
    public func execute() -> Observable<UseCaseEvent> {
        request()
            .flatMap { InvestmentsDomainHandler.result($0) }
            .catchError { InvestmentsDomainHandler.error($0) }
    }
    
    private func request() -> Observable<UseCaseEvent> {
        return Observable.create { [weak self] observer in
            // TO-DO: Implement self?.service.method
            return Disposables.create()
        }
    }
}
