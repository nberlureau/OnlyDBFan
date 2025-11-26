import React from 'react';

export default function Notifications() {
    return (
        <div className="font-display bg-transparent text-gray-100 min-h-screen flex">
            {/* Main Content */}
            <main className="flex-1 max-w-3xl mx-auto p-6">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-white/90">Notifications</h2>
                    <button className="text-primary-notifications font-medium hover:underline">Mark all as read</button>
                </div>

                <div className="flex gap-4 mb-6 border-b border-border-light dark:border-border-dark">
                    <button className="pb-3 px-2 border-b-2 border-primary-notifications text-primary-notifications font-bold">All</button>
                    <button className="pb-3 px-2 border-b-2 border-transparent text-text-secondary-light dark:text-text-secondary-dark font-medium hover:text-text-primary-light dark:hover:text-text-primary-dark transition-colors">Mentions</button>
                    <button className="pb-3 px-2 border-b-2 border-transparent text-text-secondary-light dark:text-text-secondary-dark font-medium hover:text-text-primary-light dark:hover:text-text-primary-dark transition-colors">Follows</button>
                </div>

                <div className="flex flex-col gap-2">
                    {/* Today */}
                    <h3 className="text-sm font-bold text-text-secondary-light dark:text-text-secondary-dark mt-2 mb-2">Today</h3>

                    {/* Notification Item (Unread) */}
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-transparent hover:border-primary-notifications/20 transition-colors cursor-pointer relative group">
                        <div className="relative shrink-0">
                            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA1iYduTiyUnzvTvDELoskoTZxAMb0rS1BB-DyuIC0qOWXr9praYvezjUvDZBNOu48kElCYga1c56os9usneCpIGSp5gduEx21hV4gFiuEbYT23v8qInmEvFm6smgt0eTnILGarudbqW0PTU969kJAf0d_XRNqTcZ2PX5JTXfSUX4QdSjzuXxvpmOjWx9_-mAbolyrS9pwQbHvhRocAcwWVpMcKqIHY_G0WldNgC1Gma_mgAWq9I116ffVveDRcDm04rAjHJvpmetD8")' }}>
                            </div>
                            <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white rounded-full p-0.5 border-2 border-white dark:border-[#1E1E1E]">
                                <span className="material-symbols-outlined text-sm block">chat_bubble</span>
                            </div>
                        </div>
                        <div className="flex-1">
                            <p className="text-white/90 leading-snug">
                                <span className="font-bold">Liam Designs</span> commented on your post: "This looks amazing! Great work on the colors."
                            </p>
                            <span className="text-xs text-primary-notifications font-medium mt-1 block">2 hours ago</span>
                        </div>
                        <div className="size-3 bg-primary-notifications rounded-full shrink-0 mt-2"></div>
                    </div>

                    {/* Notification Item (Unread) */}
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-transparent hover:border-primary-notifications/20 transition-colors cursor-pointer relative group">
                        <div className="relative shrink-0">
                            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA6uIYfXF1Z_lt71vGsOksTBB-5FTb-naLi7OgqA1kI7O_eZoNf3OXowRQKNDjB3sUspW3o8P09N81A31WH6UJJwA4zKKHJrf2tqjxYOWhxvsNs-r3QNZ8zDG9PrHcDM_QdPD-udXcdwqoaEX9dkW_Tmy7JUDV09TVPQG2H_XZinny61B1k3wRRMAVX2z-Qo5ELw5sBoPUj4e4EEDWXUTYfELvctAEwaOj2Mf2GU5an-FJvYKpY5AWwWtZHdyaL9e3iRAuCF0vE6nRV")' }}>
                            </div>
                            <div className="absolute -bottom-1 -right-1 bg-red-500 text-white rounded-full p-0.5 border-2 border-white dark:border-[#1E1E1E]">
                                <span className="material-symbols-outlined text-sm block">favorite</span>
                            </div>
                        </div>
                        <div className="flex-1">
                            <p className="text-white/90 leading-snug">
                                <span className="font-bold">Olivia Codes</span> and <span className="font-bold">14 others</span> liked your photo.
                            </p>
                            <span className="text-xs text-primary-notifications font-medium mt-1 block">4 hours ago</span>
                        </div>
                        <div className="size-3 bg-primary-notifications rounded-full shrink-0 mt-2"></div>
                        <img className="size-12 rounded-lg object-cover shrink-0 ml-2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5G1BedjcAY76ZKGAgKITkpDpRJzH3di4iwP7ENEGWOIbLWpsFSX6To0K49l7UsJTYiZpeR4di0YrPeMegZ7TDhfJXkj546ftssOTx0FhpKl3PO1cuKA22_jk74jfsyGK0ybUo6WUw-34TkS2s9-1yOyArwWE3Pi5d6i_Q9o2Svp2Nrz1ZdpXX6oGP0uziQ_EKXl9Mm7XInN6xQ9j1OwGfH7rFbnbpHNexQpXF69WOSxuW63K391tr23QN1agTAxshy7eMkBVhhn_r" />
                    </div>

                    {/* Yesterday */}
                    <h3 className="text-sm font-bold text-text-secondary-light dark:text-text-secondary-dark mt-6 mb-2">Yesterday</h3>

                    {/* Notification Item (Read) */}
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-transparent border border-white/10 hover:bg-white/5 transition-colors cursor-pointer relative group">
                        <div className="relative shrink-0">
                            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDWCMnpx72MPJTfTL8izdPBqG24HCXJ-M7nf7Uelnfeqmdf_92anzn8_O8MViZ4sqMN0Cf6km1Rcpw9IHiylNdhTapH1DKcHchcnrJhlSl13XHEoZpv-nPxDUKbHuxL6zH3vLkfHmgUvQOod5tfTIhytj1jBbDEoqEjHDYD1Ws287qaAVHQaLAKYtsEldqh5-R-o0-lvHndurY97eGVA2flO6SHPwJGJPCU5fo6IKhbg9IBhVXH524yKJXHYdr-xpoeeWSDlMx2Qbsf")' }}>
                            </div>
                            <div className="absolute -bottom-1 -right-1 bg-green-500 text-white rounded-full p-0.5 border-2 border-white dark:border-[#1E1E1E]">
                                <span className="material-symbols-outlined text-sm block">person_add</span>
                            </div>
                        </div>
                        <div className="flex-1">
                            <p className="text-white/90 leading-snug">
                                <span className="font-bold">Noah Art</span> started following you.
                            </p>
                            <span className="text-xs text-text-secondary-light dark:text-text-secondary-dark mt-1 block">1 day ago</span>
                        </div>
                        <button className="px-4 py-1.5 bg-primary-notifications text-white text-sm font-bold rounded-lg hover:bg-primary-notifications/90 transition-colors">Follow Back</button>
                    </div>

                    {/* Notification Item (Read) */}
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-transparent border border-white/10 hover:bg-white/5 transition-colors cursor-pointer relative group">
                        <div className="relative shrink-0">
                            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBXci3pwhqRRqvK438EZjalQqJA9IHl55VxD0ggO5VzE0aT9KbVuHZagFwvTCEkZ_U6CegGCyM_uxtK3UIbQB5VXByhv3qOVUeEwSlF6g05zfj25TRQ_MOp238QlYS3BNuvJYONFBaRqKmABGpGob5XTxFoL5o3RZ3uR7-em8K9_IJsGoN-6CnugOylyWIBgnr2sykiYxJ6tWragp_8T0y0U5CKtm7CYMTDBvTnGh7NBIC01_LWpEZTxC2ELTY_3C6e4VX7RhVtlXTc")' }}>
                            </div>
                            <div className="absolute -bottom-1 -right-1 bg-purple-500 text-white rounded-full p-0.5 border-2 border-white dark:border-[#1E1E1E]">
                                <span className="material-symbols-outlined text-sm block">alternate_email</span>
                            </div>
                        </div>
                        <div className="flex-1">
                            <p className="text-white/90 leading-snug">
                                <span className="font-bold">Sofia Chen</span> mentioned you in a comment: "@janedoe check this out!"
                            </p>
                            <span className="text-xs text-text-secondary-light dark:text-text-secondary-dark mt-1 block">1 day ago</span>
                        </div>
                        <img className="size-12 rounded-lg object-cover shrink-0 ml-2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_Sm_WxNnVyIZ74ehwSTCIDRAUw1zMEHNWrshhVVGYT6ji52nlZ5wb54aSvzNJt_vn0MlYY0ow6CtddyV8axbWZNuIZzy1n5Nprm4hnlqavMmDJ1-4M9rfBSMLdTmILEQC5RyBmY-_67YGig2ZyO-S3SW31CkBmTYfeT1yFlcPikdMKr-bKBfXNOhqyj5RMPZoa66k502uYUEdKLii2KpgO9SBsbgeb_SpfIgi70hNaxsUlIsb6q7GQU5kr3FkpXFiwCtUNesSSqqg" />
                    </div>
                </div>
            </main>
        </div>
    );
}
