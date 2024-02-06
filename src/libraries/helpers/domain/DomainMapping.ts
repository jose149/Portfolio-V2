class DomainMapping {
  public getDomainSpec (domain: Domains): Market {
    switch (domain) {
      case Domains.SPAIN:
        return {
          Number: 2,
          Domain: 'josecrespi.netlify.app/',
          IsSubdomain: false,
          Locale: 'es',
          FullLocale: 'es-ES',
          Currency: 'EUR',
          Digits: 2,
          Logo: 'initials.svg',
          Title: 'Jose Crespi - Portfolio',
          GeneralTermsRelativePath: '',
          SupportPage: ''
        }
      case Domains.UNITEDKINGDOM:
        return {
          Number: 3,
          Domain: 'josecrespi.netlify.app.uk',
          IsSubdomain: false,
          Locale: 'en',
          FullLocale: 'en-GB',
          Currency: 'GBP',
          Digits: 2,
          Logo: 'initials.svg',
          Title: 'Jose Crespi - Portfolio',
          GeneralTermsRelativePath: '',
          SupportPage: ''
        }
      default:
        return {
          Number: 1,
          Domain: 'josecrespi.netlify.app/',
          IsSubdomain: false,
          Locale: 'es',
          FullLocale: 'es-ES',
          Currency: 'EUR',
          Digits: 2,
          Logo: 'initials.svg',
          Title: 'Jose Crespi - Portfolio',
          GeneralTermsRelativePath: '',
          SupportPage: ''
        }
    }
  }

  public get isLocalhost (): boolean {
    return this.hostContains('localhost') || this.hostContains('127.0.0.1')
  }

  public get isStaging (): boolean {
    return this.hostContains('sembo-stage')
  }

  public get isProduction (): boolean {
    return !this.isLocalhost && !this.isStaging
  }

  public get isSpanishMarket (): boolean {
    return getDomain.getCurrentDomainSpec().Locale === 'es'
  }

  public get isEnglandMarket (): boolean {
    return getDomain.getCurrentDomainSpec().Locale === 'en'
  }

  public getCurrentDomainSpec (): Market {
    const currentHost: string = window.location.host
      .replace('www.', '')

    let currentDomain: Market = this.getDomainSpec(Domains.SPAIN)

    if (this.isProduction) {
      Object.keys(Domains).forEach((key: string) => {
        const domain: Market = this.getDomainSpec(
          Domains[key as keyof typeof Domains]
        )
        if (currentHost === domain.Domain) {
          currentDomain = domain
        }
      })
    } else {
      const defaultLocale = 'es'
      const locale =
        this.parseQueryString(window.location.href).locale ?? defaultLocale

      Object.keys(Domains).forEach((key: string) => {
        const domain: Market = this.getDomainSpec(
          Domains[key as keyof typeof Domains]
        )
        if (locale.includes(domain.Locale)) {
          currentDomain = domain
        }
      })
    }

    return currentDomain
  }

  public getLanguageLocale (): string {
    if (this.isProduction) {
      return this.getCurrentDomainSpec().Locale
    }

    const defaultUserLocale = 'es'
    const queryStringLocale = this.parseQueryString(
      window.location.href
    ).locale

    return Array.isArray(queryStringLocale)
      ? queryStringLocale[0]
      : queryStringLocale ?? defaultUserLocale
  }

  private parseQueryString (
    query: string
  ): Record<string, string | string[] | undefined> {
    const queryString: Record<string, string | string[]> = {}
    const queryParams = query.split('?')[1]

    if (!queryParams) {
      return queryString
    }

    queryParams.split('&').forEach((param) => {
      const [key, value] = param.split('=').map(decodeURIComponent)
      if (!queryString[key]) {
        queryString[key] = value
      } else if (typeof queryString[key] === 'string') {
        queryString[key] = [queryString[key] as string, value]
      } else {
        (queryString[key] as string[]).push(value)
      }
    })

    return queryString
  }

  private hostContains (value: string): boolean {
    return window.location.host.includes(value)
  }
}

export enum Domains {
  SPAIN,
  UNITEDKINGDOM,
}

export interface Market {
  Number: number
  Domain: string
  IsSubdomain: boolean
  Locale: string
  FullLocale: string
  Currency: string
  Digits: number
  Logo: string
  Title: string
  GeneralTermsRelativePath: string
  SupportPage: string
}

export const getDomain = new DomainMapping()
