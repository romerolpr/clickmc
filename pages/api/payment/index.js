import { apiHandler } from '../../../src/helpers/api';
import { userService } from '../../../src/services';

export default apiHandler({
    post: newPaymentCard
});

function newPaymentCard(req, res) {
    
    const { card } = userService.addCard(req.body.card)

    return res.status(200).json({
      error: false,
      message: 'O cartão foi adicionado.',
      card: card
    })
}