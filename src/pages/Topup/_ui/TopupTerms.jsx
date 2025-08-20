
import { SectionNormal } from "components/Section"

import bgLightning from "assets/lightning.png"

const TopupTerms = () => {

    return(
        <SectionNormal 
            extraClass="ran-topup__terms"
            bg={bgLightning}
        >

            <h2 className="frame__header fs--20px">TERMS & CONDITION FOR EP TOP-UP </h2>

            <div className="frame__desc">
                <p>
                    1. Non-Refundable: All top-up contributions are voluntary and non-refundable. These contributions support the ongoing operation of servers, including hardware and software upgrades, maintenance, and related services. By participating, you acknowledge that no refunds will be issued under any circumstances.
                    <br/><br/>
                    2. No Liability: The server and its operators shall not be held responsible for any failures in personal remittances or losses incurred from player transactions. This includes but is not limited to issues arising from network outages, payment processing errors, or technical malfunctions.
                    <br/><br/>
                    3. Player Responsibility: We do not guarantee the success of player-to-player transactions. All remittances should be made solely for your own account. The server is not liable for any disputes, losses, or damages resulting from transactions conducted on behalf of others or any third parties. It is your responsibility to verify the identity and trustworthiness of other players before engaging in transactions.
                    <br/><br/>
                    4. Compliance with Rules: All players must comply with the server’s rules and regulations when engaging in transactions. Violations may result in penalties, including account suspension or banning.
                    <br/><br/>
                    5. Changes to Terms: The server reserves the right to modify these terms and conditions at any time. Any changes will be communicated through the server's official channels, and continued use of the top-up service constitutes acceptance of the revised terms.
                    <br/><br/>
                    6. Contact Information: For any questions or concerns regarding these terms, please contact our support team through the designated support channels.
                </p>
            </div>


        </SectionNormal>
    )
}

export default TopupTerms;