import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
//CONTROLLERS
import { DefaultText } from "../../controllers/textController";

const Privacy = () => {
    
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0,0);
    }, [pathname]);

    return (
        <div class="disclaimers">
            <DefaultText>
                <strong>Privacy Policy</strong> 
            </DefaultText>
            <DefaultText>
                BetterThanYesterday, Inc. built the BetterThanYesterday app as
                a Commercial app. This SERVICE is provided by
                BetterThanYesterday, Inc.  and is intended for use as
                is.
                This page is used to inform visitors regarding our
                policies with the collection, use, and disclosure of Personal
                Information if anyone decided to use our Service.
                If you choose to use our Service, then you agree to
                the collection and use of information in relation to this
                policy. The Personal Information that we collect is
                used for providing and improving the Service. we will not use or share your information with
                anyone except as described in this Privacy Policy.
                The terms used in this Privacy Policy have the same meanings
                as in our Terms and Conditions, which is accessible at
                BetterThanYesterday unless otherwise defined in thiWs Privacy Policy.
            </DefaultText> 
            <DefaultText>
                <strong>Information Collection and Use</strong>
            </DefaultText> 
            <DefaultText>
                For a better experience, while using our Service, we
                may require you to provide us with certain personally
                identifiable information, including but not limited to BetterThanYesterday, Inc. The information that
                we request will be retained by us and used as described in this privacy policy.
                The app does use third party services that may collect
                information used to identify you.
                Link to privacy policy of third party service providers used
                by the app
            </DefaultText> 
                <ul>
                    <li style={{ listStyle: "none" }}>
                        <a href="https://www.google.com/policies/privacy/" target="_blank" rel="noopener noreferrer">Google Play Services</a>
                    </li>
                    <li style={{ listStyle: "none" }}>
                        <a href="https://expo.io/privacy" target="_blank" rel="noopener noreferrer">Expo</a>
                    </li>
                </ul>
                <DefaultText>
                    <strong>Log Data</strong>
                </DefaultText> 
                <DefaultText>
                we want to inform you that whenever you
                use our Service, in a case of an error in the app
                we collect data and information (through third party
                products) on your phone called Log Data. This Log Data may
                include information such as your device Internet Protocol
                (“IP”) address, device name, operating system version, the
                configuration of the app when utilizing our Service,
                the time and date of your use of the Service, and other
                statistics.
                </DefaultText> 
                <DefaultText>
                    <strong>Cookies</strong>
                </DefaultText> 
                <DefaultText>
                Cookies are files with a small amount of data that are
                commonly used as anonymous unique identifiers. These are sent
                to your browser from the websites that you visit and are
                stored on your device's internal memory.
                This Service does not use these “cookies” explicitly. However,
                the app may use third party code and libraries that use
                “cookies” to collect information and improve their services.
                You have the option to either accept or refuse these cookies
                and know when a cookie is being sent to your device. If you
                choose to refuse our cookies, you may not be able to use some
                portions of this Service.
                </DefaultText> 
                <DefaultText>
                    <strong>Service Providers</strong>
                </DefaultText> 
                <DefaultText>
                We may employ third-party companies and
                individuals due to the following reasons:
                </DefaultText> 
                <ul>
                    <li>To facilitate our Service;</li>
                    <li>To provide the Service on our behalf;</li> 
                    <li>To perform Service-related services; or</li> 
                    <li>To assist us in analyzing how our Service is used.</li>
                </ul> 
                <DefaultText>
                we want to inform users of this Service
                that these third parties have access to your Personal
                Information. The reason is to perform the tasks assigned to
                them on our behalf. However, they are obligated not to
                disclose or use the information for any other purpose.
                </DefaultText> 
                <DefaultText>
                    <strong>Security</strong>
                </DefaultText> 
                <DefaultText>
                we value your trust in providing us your
                Personal Information, thus we are striving to use commercially
                acceptable means of protecting it. But remember that no method
                of transmission over the internet, or method of electronic
                storage is 100% secure and reliable, and we cannot
                guarantee its absolute security.
                </DefaultText> 
                <DefaultText>
                    <strong>Links to Other Sites</strong>
                </DefaultText> 
                <DefaultText>
                This Service may contain links to other sites. If you click on
                a third-party link, you will be directed to that site. Note
                that these external sites are not operated by us.
                Therefore, we strongly advise you to review the
                Privacy Policy of these websites. we have
                no control over and assume no responsibility for the content,
                privacy policies, or practices of any third-party sites or
                services.
                </DefaultText> 
                <DefaultText>
                    <strong>Children’s Privacy</strong>
                </DefaultText> 
                <DefaultText>
                These Services do not address anyone under the age of 13.
                we do not knowingly collect personally
                identifiable information from children under 13. In the case
                we discover that a child under 13 has provided
                us with personal information, we immediately
                delete this from our servers. If you are a parent or guardian
                and you are aware that your child has provided us with
                personal information, please contact us so that
                we will be able to do necessary actions.
                </DefaultText> 
                <DefaultText>
                    <strong>Changes to This Privacy Policy</strong>
                </DefaultText> 
                <DefaultText>
                we may update our Privacy Policy from
                time to time. Thus, you are advised to review this page
                periodically for any changes. we will
                notify you of any changes by posting the new Privacy Policy on
                this page.
                This policy is effective as of 2020-05-01
                </DefaultText> 
                <DefaultText><strong>Contact Us</strong></DefaultText> 
                <DefaultText>
                If you have any questions or suggestions about our
                Privacy Policy, do not hesitate to contact us at BtyDevelopmentTeam@gmail.com.
                </DefaultText> 
        </div>
    );
};

export default Privacy;