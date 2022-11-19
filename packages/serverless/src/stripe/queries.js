export const getUserForPremium = `select email, stripe_customer_id, stripe_subscription_id from framethrower_public.profile join framethrower_private.profile_secrets ON profile_secrets.profile_id = profile.id left join framethrower_public.premium ON premium.profile_id = profile.id where profile.id = $1`

export const storePremiumUser = `insert into framethrower_public.premium (premium_definition_id, profile_id, stripe_customer_id, stripe_subscription_id,  status, current_period_end) values ((select id from framethrower_public.premium_definition where name = 'pro'), $1, $2, $3, $4, $5)`
