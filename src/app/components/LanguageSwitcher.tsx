import { useLocale, useTranslations } from 'next-intl';
import LanguageSwitcherSelect from './Switcher';
import { routing } from '../i18n/routing';

export default function LocaleSwitcher() {
    const t = useTranslations('LanguageSelect'); // Traducciones para el selector
    const locale = useLocale(); // Idioma actual

    return (
        <LanguageSwitcherSelect defaultValue={locale} label={t('label')}>
            {routing.locales.map((cur) => {
                return (
                    <option key={cur} value={cur} className="text-gray-900">
                        {t('locale', { locale: cur }) || 'Unknown'}
                    </option>
                );
            })}
        </LanguageSwitcherSelect>
    );
}
