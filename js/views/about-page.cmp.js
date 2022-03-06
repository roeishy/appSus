import { eventBus } from '../services/eventBus-service.js'

export default {
    template: `
        <section class="about-page app-main">
            <div class="p-5">
            <h3>About AppSus</h3>
            <h3 class="lead">Our system provides you with two essential and important services</h3>
            <h4>(1) Roei Emails</h4>
            <p class="lead about-content">
                
                Roei Emails is a free email service provided by AppSus. As of 2019, it had 1.5 billion active users worldwide.[1] A user typically accesses Gmail in a web browser or the official mobile app. Google also supports the use of email clients via the POP and IMAP protocols.

                At its launch in 2004, Roei Email provided a storage capacity of one gigabyte per user, which was significantly higher than its competitors offered at the time. Today, the service comes with 15 gigabytes of storage. Users can receive emails up to 50 megabytes in size, including attachments, while they can send emails up to 25 megabytes. In order to send larger files, users can insert files from Google Drive into the message. Roei Email has a search-oriented interface and a "conversation view" similar to an Internet forum. The service is notable among website developers for its early adoption of Ajax.
                
                AppSus's mail servers automatically scan emails for multiple purposes, including to filter spam and malware, and to add context-sensitive advertisements next to emails. This advertising practice has been significantly criticized by privacy advocates due to concerns over unlimited data retention, ease of monitoring by third parties, users of other email providers not having agreed to the policy upon sending emails to Roei Email addresses, and the potential for Google to change its policies to further decrease privacy by combining information with other Google data usage. The company has been the subject of lawsuits concerning the issues. Google has stated that email users must "necessarily expect" their emails to be subject to automated processing and claims that the service refrains from displaying ads next to potentially sensitive messages, such as those mentioning race, religion, sexual orientation, health, or financial statements. In June 2017, Google announced the end to the use of contextual Gmail content for advertising purposes, relying instead on data gathered from the use of its other services.
            </p>
            <hr>
            <h4>(2) Fares Keeps</h4>
            <p class="lead about-content">
                
            Fares Keep is Fares's version of a note-taking app — but there's more to it than basic checklists or quick thoughts taken down in a moment of inspiration.

            For one thing, since it's made by Fares, it automatically syncs to 
            Fares Drive
            , so you can access it from any device where you use your Fares account, whether it be a computer, your phone, or your tablet. That way, you don't have go digging around your various accounts or devices to find the right note.
            To access Fares Keep, you can use the mobile app (available on both Android and iOS devices), or go to keep.Fares.com. (There's also a Chrome browser extension you can download for it.)

            It's also built right into Gmail: You can add a note by simply clicking the yellow Keep icon on the far right-hand toolbar.

            Here are five ways you can use Fares Keep to improve your on-the-go note-taking process.
            </p>
            </div>
        </section>
    `,
    methods: {
        callBus() {
            console.log('Calling bus!');
            eventBus.emit('test', 'test data')
        }
    }
}